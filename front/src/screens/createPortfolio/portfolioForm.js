  
import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const PortfolioForm = () => {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const [MDEContent, setMDEContent] = useState('');
  const onSubmit = (data) => {
    let form_value = getValues()
    form_value['MDEContent'] = MDEContent
    console.log(form_value)
  }

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>title</label>
      <input name='title' ref={register({required: true})} placeholder='ポートフォリオのタイトルを入力してください'/>
      <label>URL</label>
      <input name='portfolioURL' ref={register({required: true})} placeholder='ポートフォリオのURLを入力してください'/>
      <SimpleMDE onChange={setMDEContent} value={MDEContent} />
      <input type='submit' onSubmit={onSubmit}/>
    </form>
  )
}

export default PortfolioForm;