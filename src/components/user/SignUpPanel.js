import React , {Component} from 'react';
import Panel from './Panel';
import S from './style.scss';

import Validation from 'common/util/validation'

export default class SignUpPanel extends Component{

    constructor(props){
        super(props);

        this.state = {
          username: '',
          password: '',
          confpass: '',
          nameErr: false,
          passErr: false,
          confErr: false,
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
        this.chaneConf = this.chaneConf.bind(this)

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

      let msg = this.validation.valiOneByValue('password', target.value);

      let {confErr} = this.state;

      this.setState({
        password: target.value,
        passErr: msg
      })

      if (confErr) {
        this.chaneConf()
      }

    }

    chaneConf(){
      let {passwDom, cfPasswDom} = this.refs;
      let confErr = passwDom.value === cfPasswDom.value ? '' : '密码不一致';

      this.setState({
        confpass: cfPasswDom.value,
        confErr
      })
    }

    render(){

      let {chaneName, chanePass, chaneConf} = this;

      let {username, password, confpass, nameErr, passErr, confErr} = this.state;

      let nameErrMsg = nameErr ? (
        <p className={S.err}>{nameErr}</p>
      ) : null;
      let passErrMsg = passErr ? (
        <p className={S.err}>{passErr}</p>
      ) : null;
      let confErrMsg = confErr ? (
        <p className={S.err}>{confErr}</p>
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
                    <div className={`field`}>
                        <input
                            type="text"
                            placeholder="确认密码"
                            value={confpass}
                            onChange={chaneConf}
                            ref="cfPasswDom"
                        />
                        {confErrMsg}
                    </div>
                    <div className="field">
                        <button type="submit"
                            className="ui button fluid primary"
                        >注册</button>
                    </div>
                </form>
            </div>
        );
    }
}
