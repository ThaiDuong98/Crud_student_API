import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import studentAPI from '../api/studentApi'


export const getListStudent = createAsyncThunk(
    "student/getListStudent",
    async () => {
        try{
            const respone = await studentAPI.getAll()
            return respone
        }catch(error){
            console.log(error)
        }
    }
)

export const addStudent = createAsyncThunk(
    "student/addStudent",
    async (student, apiThunk) => {
        try {           
            const respone = await studentAPI.addStudent(student)
            apiThunk.dispatch(getListStudent())
            return respone
        } catch (error) {
            console.log(error)
        }
    }
)

export const deleteStudent = createAsyncThunk(
    "student/deleteStudent",
    async (id, apiThunk) => {
        try {
            const respone = await studentAPI.deleteStudent(id)
            apiThunk.dispatch(getListStudent())

            return respone
        } catch (error) {
            console.log(error)
        }
    }
)

export const getStudentById = createAsyncThunk(
    "student/getStudentById",
    async (id) => {
        try {
            const response = await studentAPI.getStudentById(id)

            return response
        } catch (error) {
            console.log(error)
        }
    }
)

export const processUpdateStudent = createAsyncThunk(
    "student/updateStudent",
    async (student, apiThunk) => {
        try {
            const respone = await studentAPI.updateStudent(student)
            apiThunk.dispatch(getListStudent())
          
            return respone
        } catch (error) {
            console.log(error)
        }
    }
)


const studentSlice = createSlice({
    name: 'students',
    initialState: {
       studentList: [],
       updatedStudent: undefined,
       statusMessage: ''
    },
    extraReducers: {
        [getListStudent.pending]: (state, action) => {
            state.statusMessage = "Wating for get student list"
        },
        [getListStudent.fulfilled]: (state, action) => {
            state.statusMessage = "Get list student uccess !"
            state.studentList = action.payload
        },
        [getListStudent.rejected]: (state, action) => {
            state.statusMessage = "error when get list student"
        },
        [addStudent.pending]: (state, action) => {
            state.statusMessage = "Waiting for add student"
        },
        [addStudent.fulfilled]: (state, action) => {
            state.statusMessage = action.payload
        },
        [addStudent.rejected]: (state, action) => {
            state.statusMessage = "error when add student"
        },
        [deleteStudent.pending]: (state, action) => {
            state.statusMessage = "Waiting for delete student"
        },
        [deleteStudent.fulfilled]: (state, action) => {
            state.statusMessage = "Delete successfully !"
            state.updatedStudent = undefined
        },
        [deleteStudent.rejected]: (state, action) => {
            state.statusMessage = "error when delete student"
        },
        [getStudentById.pending]: (state, action) => {
            state.statusMessage = "Waiting for get student by Id"
        },
        [getStudentById.fulfilled]: (state, action) => {
            state.statusMessage = "get student by id successfully!"
            state.updatedStudent = action.payload
        },
        [getStudentById.rejected]: (state, action) => {
            state.statusMessage = "error when get student by id"
        },
        [processUpdateStudent.pending]: (state, action) => {
            state.statusMessage = "Waiting for update student"
        },
        [processUpdateStudent.fulfilled]: (state, action) => {
            state.statusMessage = action.payload
            state.updatedStudent = undefined
        },
        [processUpdateStudent.rejected]: (state, action) => {
            state.statusMessage = "error when hanlde delete student"
        }
    }
})

export default studentSlice.reducer