using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ToDo.Models;
namespace ToDo.DAL
{
    public class DALToDo
    {
        //public List<ToDoTable> GetAllTask(int UsedId)
        //{

        //    var DbConnection = new DbConnection();
        //    return DbConnection.UserTables.Join(ToDoTable).ToList();    
        //}

        public UserTable GetUserDAL(string Username)
        {
            var DbConnection = new DbConnection();
                       
            return DbConnection.UserTables.FirstOrDefault(a => a.Username == Username);
        }
        public List<ToDoTable> GetTask(int UserId)
        {

            var DbConnection = new DbConnection();
            return DbConnection.ToDoTables.Where(x => x.UserId == UserId).ToList();
        }

        public ToDoTable PostTaskDAL(ToDoTable oToDoTable)
        {
            var DbConnection = new DbConnection();
            var todo = new ToDoTable();
            todo.UserId = oToDoTable.UserId;
            todo.Task = oToDoTable.Task;
            todo.Date = DateTime.Now;
            //    todo.EditDate = EditDate;   
            todo.Complete = oToDoTable.Complete;


            DbConnection.Entry(todo).State = System.Data.Entity.EntityState.Added;
            DbConnection.SaveChanges();
            return oToDoTable;
        }

        public ToDoTable UpdateTask( ToDoTable oToDoTable)
        {

            var DbConnection = new DbConnection();
            var currentToDo = DbConnection.ToDoTables.FirstOrDefault(x => x.TaskId == oToDoTable.TaskId);   
            currentToDo.Task = oToDoTable.Task;
            currentToDo.EditDate = DateTime.Now;   
            currentToDo.Complete = oToDoTable.Complete;


            DbConnection.Entry(currentToDo).State = System.Data.Entity.EntityState.Modified;
            DbConnection.SaveChanges();
            return oToDoTable;
        }
        public bool DeleteTask(int TaskId)
        {
            

            var DbConnection = new DbConnection();
            var currentTask =    DbConnection.ToDoTables.First(x => x.TaskId == TaskId);

            DbConnection.Entry(currentTask).State = System.Data.Entity.EntityState.Deleted;
            DbConnection.SaveChanges();
            return true;
        }
        public UserTable PostUser(UserTable oUserTable)
        {
            var DbConnection = new DbConnection();
            var data = new UserTable();
     
            data.Username = oUserTable.Username;
            data.Password = oUserTable.Password;
            data.Email = oUserTable.Email;
            data.FirstName = oUserTable.FirstName;
            data.LastName = oUserTable.LastName;
            


            DbConnection.Entry(data).State = System.Data.Entity.EntityState.Added;
            DbConnection.SaveChanges();
            return oUserTable;
        }

    }
}