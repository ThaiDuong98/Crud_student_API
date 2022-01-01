import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { deleteStudent, getListStudent, getStudentById } from '../redux/studentSlice';

const StudentList = () => {

    const dispacth = useDispatch()
    const {studentList, statusMessage} = useSelector(state => state.students)
    
    console.log("status: ", statusMessage)
    
   
    useEffect(() => {
        dispacth(getListStudent())
    }, [dispacth])

    const handleDeleteStudent = (id) => {
        dispacth(deleteStudent(id))
    }

    const getEditStudent = (id) => {
        dispacth(getStudentById(id))
    }


    return (
        <div>
            <TableContainer component={Paper} style={{ width: 1300, margin: "0 auto" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Student Code</TableCell>
                            <TableCell align="left">Student Name</TableCell>
                            <TableCell align="left">Student Type</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Phone</TableCell>
                            <TableCell align="left">Math Score</TableCell>
                            <TableCell align="left">Physics Score</TableCell>
                            <TableCell align="left">Chemistry Score</TableCell>                          
                            <TableCell align="left">Traning Point</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {studentList && studentList.map(student => (
                            <TableRow
                                key={student.maSinhVien}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {student.maSinhVien}
                                </TableCell>
                                <TableCell align="left">{student.tenSinhVien}</TableCell>
                                <TableCell align="left">{student.loaiSinhVien}</TableCell>
                                <TableCell align="left">{student.email}</TableCell>
                                <TableCell align="left">{student.soDienThoai}</TableCell>                              
                                <TableCell align="left">{student.diemToan}</TableCell>
                                <TableCell align="left">{student.diemLy}</TableCell>
                                <TableCell align="left">{student.diemHoa}</TableCell>                                                             
                                <TableCell align="left">{student.diemRenLuyen}</TableCell>
                                <TableCell align="left">
                                    <Button size="small" onClick={() => getEditStudent(student.maSinhVien)}>
                                        <EditIcon />
                                    </Button>
                                    <Button size="small" onClick={() => handleDeleteStudent(student.maSinhVien)}>
                                        <DeleteIcon />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default StudentList
