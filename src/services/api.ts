/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError } from 'axios';
import { User } from '../types';

interface ApiErrorResponse {
  message?: string;
  [key: string]: any;
}

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwic2Vzc2lvbklkIjoyNTIsImlhdCI6MTc0MDI5NjM5NywiZXhwIjoxNzQwMzgyNzk3fQ.eu1cFGvjzkcoAEvvnGr7xkSSFmDaxLD0wllP59dGe0g`,
  },
});

// Fetch all users
export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await api.get('/users/all-users');
    return response.data;
  } catch (error) {
    const err = error as AxiosError<ApiErrorResponse>;
    throw new Error(err.response?.data?.message || 'Failed to fetch users');
  }
};

export const getUserDetails = async (id: number): Promise<User> => {
  try {
    const response = await api.get(`/users/get-a-user/${id}`);
    return response.data;
  } catch (error) {
    const err = error as AxiosError<ApiErrorResponse>;
    throw new Error(
      err.response?.data?.message || 'Failed to fetch user details'
    );
  }
};
