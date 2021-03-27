import {Container, Grid, Typography} from "@material-ui/core";
import Notice from './Adminnote';
import React, {Component} from 'react';
import './note.css';
import FormDialog from "./FromDialog";
import {useState} from "react";

const noteData=[

    {id:4,
    title:"xxx",
    details:"jjjjj"},

    {id:5,
        title:"yyy",
        details:"jaaaj"},

        {id:6,
            title:"zzzz",
            details:"jjjjj"}


];


function App(){
    const[notes,setNotes]=useState([]);

    const handleAddNote =(title,details)=>{
        console.log('Title:',title);
        const newNote={id:Math.random(), title:title,details:details};
        console.log('Detail',details);
        const newNoteData=notes.concat(newNote);
        setNotes(newNoteData);
    }

    const handleDeleteNote=(id)=>{

        console.log("Note Id", id);
        const newNoteData = notes.filter((item)=>item.id !=id);
        setNotes(newNoteData);

        

    }
    return(

        <div className="not">
            
        <Container >

        <Grid container spacing={3}>

            

            {
            (notes.length == 0 )? (

                <div style={{width:'100%', paddingTop:200}}>
                    <Typography variant="h1" color="textSecondary" style={{textAlign:'center'}} component="p" >
                        Add your notes

                    </Typography>
                </div>
            ):
            
            notes.map((item)=>(

                <Grid item md={4} sm={6} xs={12} key={item.id}>
                <Notice item={item} onDelete={handleDeleteNote}/>
                </Grid>


            ))}


            

            

        </Grid>

        <FormDialog onSubmit={handleAddNote}/>
        
        </Container>
        
        </div>
    );
}


export default App;