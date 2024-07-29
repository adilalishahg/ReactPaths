import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActions, Typography } from '@mui/material';

const TodoItem = ({todoItem,fetchDetailsOfCurrentTodo}) => {
    console.log(todoItem)
  return (
    <Card 
        sx={{ 
            maxWidth:550,
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            
        }}
    >
        <CardContent>
            <Typography variant="h5" color={"text.secondary"}>
                {todoItem?.todo}
            </Typography>
        </CardContent>
        <CardActions>
            <Button 
                onClick={()=>fetchDetailsOfCurrentTodo(todoItem?.id)}
                sx={{ 
                    backgroundColor:"green",
                    color:"white",
                    opacity:"0.75",
                    "&:hover":{
                        backgroundColor:"green",
                        color:"white",
                        opacity:"1"
                    }
                 }}
            >Show Detail</Button>
        </CardActions>

    </Card>
  )
}

export default TodoItem