export interface LoginPage {
  login_page: {
    app_name: {
      selector: string;
      message: string;
    };
    header: {
      selector: string;
      message: string;
    };
    login_input: {
      email_selector: string;
      password_selector: string;
    };
    helping_text: string;
    login_btn: {
      selector: string;
      message: string;
    };
    create_acc_btn: {
      selector: string;
    };
    create_page: {
      create_acc_btn: {
        selector: string;
      };
    };
  };
  create_page: {
    headline: {
      selector: string;
      message: string;
    };
    box_left: string;
    firstname_input: string;
    lastname_input: string;
    email_input: string;
    password_input: string;
    cfpassword_input: string;
    box_right: string;
    create_acc_btn: {
      selector: string;
    };
  };
}

export interface CreateTask {
  selectors: {
    main_input_task: string;
    num_task: string;
    task_list: string;
    task_checkbox: string;
  };
  one_task: {
    TS001: {
      TC001: {
        task: string;
        num_task: string;
      };
      TC002: {
        checkbox: boolean;
        num_task: string;
      };
      TC003: {
        num_task: string;
        num_wait: number;
        num_task_latest: string;
      };
    };
  };
}
