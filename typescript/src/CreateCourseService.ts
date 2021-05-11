interface Course {
    name: string;
    duration?: number;//atributo opcional com ?
    educator: string;

}

class CreateCourseService {
    execute({ duration = 8, educator, name }: Course){ //8 seria um valor default caso duracao nao seja passada
        console.log(name, duration, educator);
    }
}

export default new CreateCourseService();