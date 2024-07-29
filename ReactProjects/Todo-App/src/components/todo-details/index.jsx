import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'
import React from 'react'

const TodoDetails = ({todoDetails,openDialog,setOpenDialog,setTodoDetials}) => {
  return (
    <>
        <Dialog onClose={() => setOpenDialog(false)} open={openDialog}>
            <DialogTitle>{todoDetails?.todo}</DialogTitle>
            <DialogActions>
                <Button
                    onClick={() => {
                        setTodoDetials(null)
                        setOpenDialog(false)}}
                >Close</Button>
            </DialogActions>
        </Dialog>
    </>
  )
}
 export default TodoDetails