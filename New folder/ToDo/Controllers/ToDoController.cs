using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using ToDo.DAL;
using ToDo.Models;

namespace ToDo.Controllers
{
    public class ToDoController : ApiController
    {
        
       
       [System.Web.Http.HttpGet]
        public int Get(int id)
        {
            return id;
        }
        [System.Web.Http.HttpPost]
        public UserTable Authentication([FromBody] UserTable oUserTable)
        {
            var DAL = new DALToDo();



            var usernameData = DAL.GetUserDAL(oUserTable.Username);

            if (usernameData == null)
            {
                return null;

            }
            else
            {
                var password = DAL.GetUserDAL(oUserTable.Username).Password;
                if (password == oUserTable.Password)
                {
                    //Session["username"] = usernameData.Username;
                   
                    return DAL.GetUserDAL(oUserTable.Username);
                }
                return null;
            }

        }
        [System.Web.Http.HttpGet]
       
        public List<ToDoTable> GetTask(int UserId)
        {
           var DAL = new DALToDo();
           return DAL.GetTask(UserId);
        }
        [System.Web.Http.HttpPost]
        public ToDoTable PostTask([FromBody] ToDoTable oToDoTable)
        {
            var DAL = new DALToDo();
            return DAL.PostTaskDAL(oToDoTable);
        }
        [System.Web.Http.HttpPost]
        public UserTable PostUser([FromBody] UserTable oUserTable)
        {
            var DAL = new DALToDo();
            return DAL.PostUser(oUserTable);
        }
        [System.Web.Http.HttpPut]
             public ToDoTable UpdateTask([FromBody] ToDoTable oToDoTable)
        {
            var DAL = new DALToDo();
            return DAL.UpdateTask(oToDoTable);
        }
        [System.Web.Http.HttpDelete]
        public bool DeleteTask(int TaskId)
        {
            var DAL = new DALToDo();
            return DAL.DeleteTask(TaskId);
          
        }
    }
}