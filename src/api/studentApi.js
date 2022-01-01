import axiosClient from "./axiosClient";

const studentAPI = {
    getAll: () => {
        const url = '/LayDanhSachSinhVien'
        return axiosClient.get(url)
    }, 
    addStudent: (params) => {
        const url = '/ThemSinhVien'
        return axiosClient.post(url, params)
    },
    deleteStudent: (id) => {
        const url = `/XoaSinhVien?maSinhVien=${id}`
        return axiosClient.delete(url, id)
    },
    getStudentById: (id) => {
        const url = `/LayThongTinSinhVien?maSinhVien=${id}`
        return axiosClient.get(url, id)
    },
    updateStudent: (params) => {
        const url = `/CapNhatThongTinSinhVien?maSinhVien=${params.maSinhVien}`
        return axiosClient.put(url, params)
    }
}

export default studentAPI