import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";

function LangList() {
    const data = [
        {id:1, name:"English"},
        {id:2, name:"Arabic"},
        {id:3, name:"French"},
        {id:4, name:"Spanish"},
    ]
    return (
        <>
            <Typography variant="h2" sx={{ textAlign: 'center', mt: 2 }}>
                שפות
            </Typography>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>מזהה</TableCell>
                    <TableCell>שם</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {data.map((item)=>(
                    <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </>
    );
}

export default LangList;