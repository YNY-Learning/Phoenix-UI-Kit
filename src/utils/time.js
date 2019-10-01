const secToMin = sec => {
  if (sec > 60) {
    const min = Math.floor(sec / 60)
    const seconds = sec % 60
    return `${min < 10 ? `0${min}` : min}:${seconds < 10 ? `0${seconds}` : seconds}`
  }
  return `00:${sec < 10 ? `0${sec}` : sec}`
}
export default secToMin
