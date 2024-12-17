import "./app.css";
import Header from "./components/Header";
import Post from "./components/Post";

const postData = [
  {
    imgSrc:
      "https://dash-api.yld.mn/api/image/58348918-6f3f-48bb-a049-8e8b2f71237e",
    tag: "Зах зээл",
    title: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
    who: "С.Ангирмаа 12 сарын 17, 2024",
  },
  {
    imgSrc:
      "https://dash-api.yld.mn/api/image/2d83d835-062d-4a85-a4c0-c7b3887f278d",
    tag: "Эдийн засаг",
    title: "Казакстаны хөгжлийн цаана",
    who: "М.Хулан 12 сарын 17, 2024",
  },
  {
    imgSrc:
      "https://dash-api.yld.mn/api/image/c00b3bc3-2340-49f4-84d3-a274bd10893f",
    tag: "Сурталчилгаа",
    title: "Ариглан гамнаж, ашигтай хадгал",
    who: "Б. Эмүжин 12 сарын 17, 2024",
  },
  {
    imgSrc:
      "https://dash-api.yld.mn/api/image/466e9012-492b-43c9-9449-aa118031efa9",
    tag: "Эдийн засаг",
    title:
      "Уул уурхайн салбар гадаадын хөрөнгө оруулалтын 80% гаруйг бүрдүүлж байна",
    who: "М.Хулан 12 сарын 16, 2024",
  },
];

function App() {
  return (
    <div className="body">
      <Header />
      <div className="bdy">
        <div className="postParent">
          {postData.map((medee) => {
            return (
              <Post
                image={medee.imgSrc}
                tag={medee.tag}
                title={medee.title}
                ognoo={medee.who}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

// okay okay do you speak english
// do you speak english can you understand me lol hah
