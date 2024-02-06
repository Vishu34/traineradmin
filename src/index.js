import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import "./App.css";
import Home from "./Home";
import {Trainers , AddTrainer ,ViewTrainerInfo , EditTrainerInfo , Students ,ViewStudentInfo ,EditStudentInfo , Categories, ViewCategories , EditCategories,HomeSlider , ViewHomeSlider , EditHomeSlider , Courses , AddCourses , EditCourses , ViewCourses , Dashboard, AddStudent  } from "./layout"

const router = createBrowserRouter([
  {
    path: "/",
    element : <Home/>,
    
    children : [
      // {
      //   path : "",
      //   element : <Dashboard/>
      // },
      
      {
        path : "trainers",
        children : [

          {
            path :"",
            element : <Trainers/>
          },
          {
            path :"view/:id",
            element : <ViewTrainerInfo/>
          },
          {
            path :"edit/:id",
            element : <EditTrainerInfo/>
          },
          {
            path :"add",
            element : <AddTrainer/>
          },
        ]
      },
      {
        path : "students",
        children : [

          {
            path :"",
            element : <Students/>
          },
          {
            path :"view/:id",
            element : <ViewStudentInfo/>
          },
          {
            path :"edit/:id",
            element : <EditStudentInfo/>
          },
          {
            path :"add",
            element : <AddStudent/>
          },
        ]
      },
      {
        path : "courses",
        children : [

          {
            path :"",
            element : <Courses/>
          },
          {
            path :"view/:id",
            element : <ViewCourses/>
          },
          {
            path :"edit/:id",
            element : <EditCourses/>
          },
          {
            path :"add",
            element : <AddCourses/>
          },
        ]
      },
      {
        path : "categories",
        children : [

          {
            path :"",
            element : <Categories/>
          },
          {
            path :"view/:id",
            element : <ViewCategories/>
          },
          {
            path :"edit/:id",
            element : <EditCategories/>
          },
        ]
      },
      {
        path : "home-slider",
        children : [

          {
            path :"",
            element : <HomeSlider/>
          },
          {
            path :"view/:id",
            element : <ViewHomeSlider/>
          },
          {
            path :"edit/:id",
            element : <EditHomeSlider/>
          },
        ]
      },
  ]
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


