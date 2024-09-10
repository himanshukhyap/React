import { useState, useEffect } from 'react';
import { auth, firestore, storage } from './FirebaseConfig';
import { collection, query, orderBy, limit, onSnapshot, addDoc, serverTimestamp, getDocs, deleteDoc, doc } from 'firebase/firestore'; // Modular Firestore imports
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage'; // Modular Storage imports

const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState({}); // State for user profiles
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersSnapshot = await getDocs(collection(firestore, 'users'));
      const usersData = {};
      usersSnapshot.forEach(doc => {
        usersData[doc.id] = doc.data();
      });
      setUsers(usersData);
    };

    fetchUsers();

    const q = query(
      collection(firestore, 'messages'),
      orderBy('createdAt'),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, snapshot => {
      const messages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(messages);
    });

    return unsubscribe;
  }, []);

  const sendMessage = async (messageText, fileUrl = null, fileName = null) => {
    if (messageText.trim() || fileUrl) {
      setLoading(true);
      try {
        const { uid, displayName } = auth.currentUser;
        console.log('Sending message:', { messageText, fileUrl, fileName }); // Log message data
  
        await addDoc(collection(firestore, 'messages'), {
          text: messageText,
          uid,
          displayName,
          fileUrl,
          fileName,
          createdAt: serverTimestamp()
        });
      } catch (error) {
        console.error('Error sending message:', error);
      } finally {
        setLoading(false);
      }
    }
  };
  

  const uploadFile = async (file) => {
    try {
      const storage = getStorage();
      const fileRef = ref(storage, `files/${file.name}`);
      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);
      console.log('Uploaded file URL:', url); // Log the URL
      return url;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  };
  
  const deleteMessage = async (messageId) => {
    try {
      await deleteDoc(doc(firestore, 'messages', messageId));
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  return {
    messages,
    users,
    sendMessage,
    deleteMessage, // Add deleteMessage to the return value
    loading
  };
};

export default useChat;
