import type { NextPage, GetStaticProps } from 'next'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import PageHead from '../components/Head'
import Input from '../components/Input'
import Layout, { PageProps } from '../components/Layout'
import internalApi from '../service/api'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'Contact | Celso Junior - Front-end Developer',
      description: 'Front-end Developer',
      image: '/',
    },
  }
}

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const initialFormState: ContactForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const Contact: NextPage<PageProps> = (props) => {
  const [formState, setFormState] = useState<ContactForm>(initialFormState)
  const [loading, setLoading] = useState<boolean>(false)

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormState({ ...formState, [name]: value })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    try {
      await internalApi.post('/sendEmail', formState)
      setFormState(initialFormState)
      toast.success('Contact sent, thank you!')
      setLoading(false)
    } catch (error: any) {
      console.error(error)
      toast.error('Error sending the form, try again later!')
      setLoading(false)
    }
  }

  return (
    <>
      <PageHead {...props} />
      <Layout>
        <div className="max-w-3xl w-full m-auto flex justify-center items-center p-6 sm:p-0">
          <div className="flex flex-col w-full p-4 gap-10 items-start sm:items-center">
            <h1 className="text-4xl font-bold text-highlight text-center sm:text-left">
              E-mail me, like the old times
            </h1>

            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
              <div className="grid gap-6 mb-6">
                <Input
                  inputLabel="Name"
                  name="name"
                  placeholder="Your name here"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid gap-6 mb-6">
                <Input
                  inputLabel="E-mail"
                  name="email"
                  placeholder="Your best E-mail"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid gap-6 mb-6">
                <Input
                  inputLabel="Subject"
                  name="subject"
                  placeholder="How can I help you?"
                  value={formState.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid gap-6 mb-6">
                <Input
                  inputType="textarea"
                  inputLabel="Message"
                  name="message"
                  placeholder="Write here your message..."
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="w-full flex justify-end">
                <button
                  type="submit"
                  className="text-white bg-highlight hover:bg-highlight-dark focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center inline-flex items-center justify-center transition-colors disabled:cursor-not-allowed disabled:bg-orange-300 disabled:opacity-80"
                  disabled={loading}
                >
                  Send message
                  <i className="ri-mail-send-line w-5 h-5 ml-2 -mr-1"></i>
                </button>
                <Toaster position="bottom-center" gutter={8} />
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Contact
