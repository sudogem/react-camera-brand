// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Readmore = function ({message, numWords, ellipsis = <span>...</span>}) {
  let value = message || "Despite being small enough to fit in unnoticed amongst other CSCs, the Alpha 7 series of cameras have a full-frame sensor. That means the sensor is the same size as a piece of 35mm film, which is good news for image quality and depth of field control. The A7R II has proved especially popular because it has a pixel count of 42.2 million, so it generates huge images that have bags of detail, and noise is controlled well. What's more, it can also shoot high quality 4K footage and there are lots of professional-level video features available. In addition, there's an excellent stabilisation system and Wi-Fi/NFC technology built-in."
  let regex = /\s+/gi
  let words = value.trim().replace(regex, ' ').split(' ')
  console.log(words)
  let n = numWords || 20
  let str = ''
  for (let i = 0; i <= n; i++) {
    str = (i !== n) ? str + words[i] + ' ' : str + words[i]
  }
  return (
    <p>
      {str}{ellipsis}
    </p>
  )
}

Readmore.propTypes = {
  message: PropTypes.string,
  numWords: PropTypes.number,
  ellipsis: PropTypes.string
}

export default Readmore
