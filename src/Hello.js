/**
 * Created by LuoJia on 2017/2/16.
 *
 * Copyright (c) 2017-present Dulingbo,SefonSoft Company, Inc.
 * All rights reserved.
 *
 * Author information:
 * Email:dulingbo@sefonSoft.com
 * Company:Sefon Soft.ChengDu
 * file information(文件功能):
 */

import React, {Component} from 'react'
import jsonData from './hello.json';

import './hello.css'
import './hello.scss'

class Hello extends Component{
    render() {
        return (
            <div className="hello_div hello_div_scss">
                {jsonData.text}
            </div>
        );
    }
}

export default Hello