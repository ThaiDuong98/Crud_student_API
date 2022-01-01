import { Button, Card, CardContent, Grid, TextField, Typography, FormControl, Select, MenuItem, InputLabel, Box } from '@mui/material'
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStudent, processUpdateStudent } from '../redux/studentSlice'
import { useForm, Controller } from "react-hook-form";

const initialStudent = {
    maSinhVien: '',
    tenSinhVien: '',
    loaiSinhVien: '',
    diemToan: '',
    diemLy: '',
    diemHoa: '',
    diemRenLuyen: '',
    soDienThoai: '',
    email: ''
}



const StudentForm = () => { 
    const {studentList, updatedStudent} = useSelector(state => state.students)
    const dispacth = useDispatch()

    const { register, control, handleSubmit, formState: { errors }, reset  } = useForm({
        defaultValues: initialStudent
    });

    // const handleChange = (e) => {
    //     setInputStudent({
    //         ...inputStudent,
    //         [e.target.name]: e.target.value
    //     })
    // }

    const handleSubmitForm = (values) => {
        if(updatedStudent){
            dispacth(processUpdateStudent(values))
            console.log("-------------------", values)
            reset(initialStudent)
        }else{
            dispacth(addStudent({
                ...values,
                maSinhVien: studentList.length + 1
            }))
            console.log("add values: ",values)
            reset(initialStudent)
        }        
    }

    useEffect(() => {
        if(updatedStudent){
            reset(updatedStudent)
        }else{
            reset(initialStudent)
        }
    }, [updatedStudent])

    return (
        <div>
            <Typography variant='h5' gutterBottom>Student Form</Typography>
            <Card style={{maxWidth: 800, margin: "0 auto", padding: "20px 5px"}}>
                <form  onSubmit={handleSubmit(handleSubmitForm)}>
                    <CardContent>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <Controller 
                                    name="tenSinhVien"
                                    control={control}
                                    render={({field}) => (
                                        <TextField    
                                            {...field}                              
                                            label="Student name"
                                            size="small"
                                            variant="outlined"
                                            fullWidth
                                            required                                                                     
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>                              
                                <FormControl variant="outlined" fullWidth size='small'>
                                    <InputLabel id="label-student-type">Student Type</InputLabel>
                                    <Controller 
                                        name="loaiSinhVien"
                                        control={control}
                                        render={({field}) => (
                                            <Select
                                                {...field}
                                                labelId="label-student-type"                                                                                           
                                                label="Student Type"    
                                            >
                                                <MenuItem value="Khá">Khá</MenuItem>
                                                <MenuItem value="Giỏi">Giỏi</MenuItem>
                                                <MenuItem value="Xuất Sắc">Xuất Sắc</MenuItem>
                                            </Select>
                                        )}
                                    />
                                </FormControl>                                                              
                            </Grid>        
                            <Grid item xs={12} >
                                <Controller 
                                    name="soDienThoai"
                                    control={control}
                                    render={({field}) => (
                                        <TextField  
                                            {...field}                                 
                                            label="Phone Number"
                                            size="small"
                                            variant="outlined"
                                            fullWidth
                                            required                                   
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <Controller 
                                    control={control}
                                    name="email"
                                    render={({field}) => (
                                        <TextField  
                                            {...field}                                
                                            label="Email"
                                            size="small"
                                            variant="outlined"
                                            type="email"
                                            fullWidth
                                            required                                  
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Controller 
                                    control={control}
                                    name="diemToan"
                                    render={({field}) => (
                                        <TextField 
                                            {...field}                                  
                                            label="math score"
                                            size="small"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            type="number"                                                                           
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Controller 
                                    control={control}
                                    name="diemLy"
                                    render={({field}) => (
                                        <TextField 
                                            {...field}                                  
                                            label="physics score"
                                            size="small"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            type="number"                                    
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Controller 
                                    control={control}
                                    name="diemHoa"
                                    render={({field}) => (
                                        <TextField 
                                            {...field}
                                            label="chemistry score"
                                            size="small"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            type="number"
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Controller 
                                    control={control}
                                    name="diemRenLuyen"
                                    render={({field}) => (
                                        <TextField        
                                            {...field}                            
                                            label="Point training"
                                            size="small"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            type="number"                                    
                                        />
                                    )}
                                />
                            </Grid>
                            
                           
                            <Grid item xs={12} >
                                <Button 
                                    type='submit' 
                                    variant='contained' 
                                    color='secondary' 
                                    fullWidth
                                    
                                >
                                    {updatedStudent ? "Edit" : "Submit"}
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </form>
            </Card>
           
        </div>
    )
}

export default StudentForm
