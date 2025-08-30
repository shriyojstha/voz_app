import { redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postAction } from "../DataFiles/DataHandling";
import { Form, useActionData } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useActionData();

  useEffect(() => {
    if (data) {
      dispatch(postAction.addPost(data));
      navigate("/");
    }
  }, [data]);

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="a" className="form-label">
          userId
        </label>

        <input
          type="text"
          required
          name="userId"
          className="form-control"
          id="a"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="b" className="form-label">
          Title
        </label>
        <input type="text" name="title" className="form-control" id="b" />
      </div>

      <div className="mb-3">
        <label htmlFor="c" className="form-label">
          Body
        </label>
        <textarea
          name="body"
          rows="3"
          className="form-control"
          id="c"
          aria-describedby="emailHelp"
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="d" className="form-label">
          Reaction
        </label>
        <input name="reactions" type="text" className="form-control" id="d" />
      </div>

      <div className="mb-3">
        <label htmlFor="e" className="form-label">
          Hashtag
        </label>
        <input
          type="text"
          name="tags"
          className="form-control"
          id="e"
          aria-describedby="emailHelp"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
};

export async function FormAction(Data1) {
  const data1 = await Data1.request.formData();
  const data = Object.fromEntries(data1);
  data.tags = data.tags.split(" ");

  return fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((posts) => {
      return posts;
    });
}

export default CreatePost;
