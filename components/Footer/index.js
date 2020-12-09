import React, { Component } from 'react'
import Link from 'next/link'
import DashBoard from '../DashBoard';


class Footer extends Component{
    render() {
        return (
            <footer>
              <ul  className="flex justify-between content-center shadow-sm text-sm py-5 px-4">
                <li className="flex mt-2">
                    <img className="inline" src="/images/Group6.svg"/>
                    <span>Local Wuru &#169;Copyright 2021</span>
                </li>
                <li className="flex mt-2">
                  <Link href="/faq">
                    <a>
                      ¿Qué es?
                    </a>
                  </Link>
                </li>
              </ul>
            </footer>
        );
    }
}

export default Footer
