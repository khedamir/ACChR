import { PostCategories, FileType } from "./enum";
import axios from "axios";

export const API_URL = process.env.REACT_APP_API_URL;

export default class BackApi {
  static async GetPosts(
    PostCategoryId: PostCategories,
    count?: number,
    page?: number
  ) {
    const response = await axios.get(
      `${API_URL}/api/posts/?category=${PostCategoryId}&count=${count}&page=${page}`
    );
    return {
      totalCount: Number(response.headers["x-total-count"]),
      posts: response.data.posts,
    } as PostsQueryData;
  }

  static async GetPostById(id?: string) {
    const response = await axios.get(`${API_URL}/api/posts/${id}`);
    return response.data.post as PostItem;
  }

  static async GetPageById(id?: string) {
    const response = await axios.get(`${API_URL}/api/pages/${id}`);
    return response.data.page as PageItem;
  }

  static async GetEmployees(priority?: number) {
    const urlRequest = priority
      ? `${API_URL}/api/employees/?priority=${priority}`
      : `${API_URL}/api/employees`;
    const response = await axios.get(urlRequest);
    return response.data.employees as EmployeeItem[];
  }

  static async GetEmployeeById(id?: string) {
    const response = await axios.get(`${API_URL}/api/employee/${id}`);
    return response.data.employee as EmployeeItem;
  }

  static async GetDocuments(category?: number, count?: number, page?: number) {
    const response = await axios.get(
      `${API_URL}/api/documents/?category=${category}&count=${count}&page=${page}`
    );
    return {
      totalCount: Number(response.headers["x-total-count"]),
      documents: response.data.documents,
    } as DocumentsQueryData;
  }
}

export interface EmployeeItem {
  id: number;
  first_name: string;
  second_name: string;
  third_name?: string;
  birth_date: string;
  main_position?: string;
  second_position?: string;
  priority?: number;
  avatar?: number;
  avatar_obj?: { id: number; name: string; url: string };
  biography: string;
}

export interface PostItem {
  id: number;
  title: string;
  content: string;
  category: number;
  public_date: string;
  main_image?: number;
  main_image_obj?: { id: number; name: string; url: string };
}

export interface PostsQueryData {
  totalCount: number;
  posts: PostItem[];
}

export interface PageItem {
  id: string;
  title: string;
  content: string;
  public_date: string;
  description?: string;
}

export interface DocumentsQueryData {
  totalCount: number;
  documents: Documents[];
}

export interface Documents {
  id: number;
  title: string;
  category: number;
  file: number;
  file_obj: { id: number; name: string; url: string; type: FileType };
}
