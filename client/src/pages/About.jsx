export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center mb-20' >
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Arnav's Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to Arnav's Blog! Arnav is a passionate learner who loves to write about
              technology, coding, and everything in between.
            </p>

            <p>
              On this blog, you'll find weekly articles and tutorials on topics
              such as web development, software engineering, and programming
              languages.
            </p>

           
          </div>
        </div>
      </div>
    </div>
  );
}