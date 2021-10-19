import { Reducer, Dispatch } from "redux";
import * as Service from "../../services/student.service";

interface IStudent {
  name: string,
  email: string,
  birthDate: number | string | Date,
  tel: number | string,
  cep: number | string,
  adress: string,
  isStudent: boolean,
  course: string,
  /**
   * depoimento do aluno
   */
  testimony: string,
  availableTime: boolean
}

export interface IStudentState {
  readonly student: IStudent,
  readonly error: string,
  readonly loading: boolean,
}

const INITIAL_STATE:IStudentState = {
  student: {
    name: "",
    email: "",
    birthDate: "",
    tel: "",
    cep: "",
    adress: "",
    isStudent: false,
    course: "",
    testimony: "",
    availableTime: false,
  },
  error: "",
  loading: false,
};

// eslint-disable-next-line
enum TYPES {
  SET_STUDENT= "SET_STUDENT",
  SET_LOADING= "STUDENT_LOADING",
  SET_ERROR= "STUDENT_ERROR"
}
export const studentReducer: Reducer<IStudentState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_STUDENT:
      return {
        ...state, student: action.payload,
      };
    case TYPES.SET_LOADING:
      return {
        ...state, loading: action.payload,
      };
    case TYPES.SET_ERROR:
      return {
        ...state, error: action.payload,
      };
    default:
      return state;
  }
};

export const studentActions = {
  getStudent: () => async (dispatch: Dispatch) => {
    dispatch({
      type: TYPES.SET_LOADING, payload: true,
    });
    try {
      const student = await Service.getStudent();
      dispatch({
        type: TYPES.SET_STUDENT, payload: student,
      });
    } catch (error) {
      dispatch({
        type: TYPES.SET_ERROR, payload: error,
      });
    }
    dispatch({
      type: TYPES.SET_LOADING, payload: false,
    });
  },
};
