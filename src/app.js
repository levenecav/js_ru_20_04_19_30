import React from 'react'
import {render} from 'react-dom'
import {articles} from './fixtures'

console.log(articles);

render(<Articles articles={articles} />, document.getElementById('container'))