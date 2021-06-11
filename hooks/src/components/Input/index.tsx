import React, { Ref, useImperativeHandle } from 'react';

interface Props {

}

const Input = React.forwardRef((props: Props, ref: Ref<HTMLInputElement>) => {
  useImperativeHandle(ref, () => ({
    focus: () => {
      console.log('focus')
    }
  } as HTMLInputElement))

  return (
    <input id="test" type="text" ref={ref} />
  )
})

export default Input;
