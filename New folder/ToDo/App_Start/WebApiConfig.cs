
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ToDo
{
    public static class WebApiConfig
    {
        
            public static void Register(HttpConfiguration config)
            {
                // Web API configuration and services

                // Web API routes
                config.MapHttpAttributeRoutes();

                //config.Routes.MapHttpRoute(
                //    name: "DefaultApi",
                //    routeTemplate: "api/{controller}/{id}",
                //    defaults: new { id = RouteParameter.Optional }
                //);
                config.Routes.MapHttpRoute(
    name: "ToDoApi",
    routeTemplate: "api/ToDo/{action}/{id}",

                defaults: new { Controller = "ToDo", id = RouteParameter.Optional }


                );
              


                EnableCorsAttribute cors = new EnableCorsAttribute("*", "*", "*");
                config.EnableCors(cors);

                //EnableCorsAttribute cors = new EnableCorsAttribute("*", "*", "*");
                //config.EnableCors(cors);
            }
        }
    }

