import { useState, Props, FC } from "react"

type Props = {
  foo: string;
}

const Test: FC<Props> = (props) => {
  const message: string = 'こんにちは React!!'
  return (
      <div className="App">
          <p>{ message }</p>
      </div>
  )
}

export default Test