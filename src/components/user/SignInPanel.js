import React , {Component} from 'react';
import Panel from './Panel';
import S from './style.scss';

import Validation from 'common/util/validation'

export default class SignInPanel extends Component{

    constructor(props){
        super(props);

        this.state = {
          username: '',
          password: '',
          nameErr: false,
          passErr: false,
        }

        this.validation = new Validation()

        this.validation.addByValue('username', [
          {strategy: 'isEmpty', errorMsg: '用户名不能为空'},
          {strategy: 'hasSpace', errorMsg: '用户名不能有空格'},
          {strategy: 'maxLength:6', errorMsg: '最长为6位'},
        ])

        this.validation.addByValue('password', [
          {strategy: 'isEmpty', errorMsg: '密码不能为空'},
          {strategy: 'hasSpace', errorMsg: '密码不能有空格'},
          {strategy: 'maxLength:6', errorMsg: '最长为6位'},
        ])

        this.chaneName = this.chaneName.bind(this)
        this.chanePass = this.chanePass.bind(this)

    }

    chaneName(ev){
      let {target} = ev;

      let msg = this.validation.valiOneByValue('username', target.value)

      this.setState({
        username: target.value,
        nameErr: msg
      })
    }
    chanePass(ev){
      let {target} = ev;
      let msg = this.validation.valiOneByValue('password', target.value)

      this.setState({
        password: target.value,
        passErr: msg
      })
    }

    render(){

        let {chaneName, chanePass} = this;

        let {username, password, nameErr, passErr} = this.state;

        let nameErrMsg = nameErr ? (
          <p className={S.err}>{nameErr}</p>
        ) : null;
        let passErrMsg = passErr ? (
          <p className={S.err}>{passErr}</p>
        ) : null;

        return (
            <div className={S.sign_panel}>
                <form
                    className="ui form"
                >
                    <div className={`field ${nameErr ? 'error' : ''}`}>
                        <input
                            type="text"
                            placeholder="用户名"
                            value={username}
                            onChange={chaneName}
                            ref="nameDom"
                        />
                        {nameErrMsg}
                    </div>

                    <div className={`field ${passErr ? 'error' : ''}`}>
                        <input
                            type="text"
                            placeholder="密码"
                            value={password}
                            onChange={chanePass}
                            ref="passwDom"
                        />
                        {passErrMsg}
                    </div>

                    <div className="field">
                        <button type="submit"
                            className="ui button fluid primary"
                        >登录</button>
                    </div>
                </form>
            </div>
        );
    }
}
