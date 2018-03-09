import {Link} from 'react-router-dom';
import S from './style.scss';

export default function Nav(){
  return(
    <div className={`ui fixed secondary pointing menu ${S.nav}`}>
          <div className="ui container">
              <Link
                  to='/'
                  className={`header item`}
              >Noods</Link>

              <Link
                  to='/'
                  className={`item`}
              >首页</Link>

              <div className="menu right">
                <Link
                    to='/sign_in'
                    className={`item`}
                >登陆</Link>

                <Link
                    to='/sign_up'
                    className={`item`}
                >注册</Link>

                <Link
                    to='/write'
                    className={`item`}
                >写文章</Link>
              </div>

          </div>
    </div>
  )
}
