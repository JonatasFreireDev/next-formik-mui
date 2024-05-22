import { useContext } from "react";
import { Form, FormContext, Input } from "../../v2/components/Form/Form";

export default function Home() {
  return (
    <div>
      adasd
      <Form name="teste">
        {(state, dispatch) => (
          <Form.Tab tabName="tab">
            <div>
              <Form.Tab tabName="tab1">
                <Form.Input name={"teste"} />
                <br></br>
                <Form.Input name={"aaae"} />
                <Form.Input name={"e"} />
                <Form.Input name={"aaeqweae"} />
                <Form.Input name={"aaae"} />
                <Form.Input name={"aqweaae"} />
                <Form.Input name={"aqweqweaae"} />
                <Form.Input name={"aqweqaae"} />
              </Form.Tab>
              <div>
                <pre>{JSON.stringify(state, null, 2)}</pre>
              </div>
            </div>
          </Form.Tab>
        )}
      </Form>
    </div>
  );
}
