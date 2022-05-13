import CardSection from "./CardSection";
import EditorBox from "./EditorBox";
import Header from "./Header";
import "./otherstyles.css";
function App() {
  return (
    <>
      <nav className="shadow-xl bg-white-a-900 p-xl flex align-center justify-between">
        <h1 className="black-a-900">Logo</h1>
        <div className="links flex align-center justify-between gap-xxxl">
          <a href="#" className="black-a-900 ">
            Home
          </a>
          <a href="#" className="black-a-900 ">
            About
          </a>
          <a href="#" className="black-a-900 ">
            Contact
          </a>
        </div>
      </nav>
      <main className="content-wrapper">
        <Header />
        <section className="section flex-v align-center justify-center gap-l px-l">
          <h1 className="txt-gradient-700 my-xxl animateIn">
            Make simple components faster
          </h1>
          <div className="bg-white-a-300 p-xxl rounded-l">
            <h1 className="grey-100 font-xl">Title</h1>
            <p className="grey-400">
              Subtitle Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aliquid sit molestias, fugiat ad facere voluptate autem optio
              nobis totam? Quam!
            </p>
          </div>
          <div className="bg-white-a-300 p-xxl rounded-l">
            <h1 className="grey-100 font-xl">Title</h1>
            <p className="grey-400">
              Subtitle Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aliquid sit molestias, fugiat ad facere voluptate autem optio
              nobis totam? Quam!
            </p>
          </div>
          <div className="bg-white-a-300 p-xxl rounded-l">
            <h1 className="grey-100 font-xl">Title</h1>
            <p className="grey-400">
              Subtitle Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aliquid sit molestias, fugiat ad facere voluptate autem optio
              nobis totam? Quam!
            </p>
          </div>
        </section>

        <section className="section flex-v align-center justify-center px-l py-xxl">
          <h1 className="txt-gradient-600 my-xxl animateIn font-xxxl">
            Make simple components faster
          </h1>
          <div className="flex-h my-xxl align-center">
            <div className="p-xxl rounded-l">
              <p className="grey-300 font-xxl">
                Built with your compliance obligations in mind.
              </p>
              <p className="grey-600 font-l">
                Subtitle Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Aliquid sit molestias.
              </p>
              <a href="#" className="purple-600 mt-xxl bold font-l">
                Watch demo ➡
              </a>
            </div>
            <div className="img-container">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1652262795850-9bbe918c2b3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                alt="pizza"
                class="rounded-xl shadow-m"
              />
            </div>
          </div>
        </section>

        <CardSection />
        <EditorBox showState={false} fadeIn={true}>
          <h1>Hello</h1>
        </EditorBox>
      </main>
    </>
  );
}

export default App;
