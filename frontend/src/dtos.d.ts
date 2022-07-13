declare namespace DTOS {
  namespace Output {
    interface Course {
      course: string[];
    }
    interface Place {
      id: number;
      user_id: string;
      nickname: string;
      name: string;
      course: Course;
      cost: number;
    }
  }
}
