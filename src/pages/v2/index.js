import { Form } from "../../v2/components";

export default function Home() {
  return (
    <div>
      <Form name="teste">
        {(state) => (
          <Form.Tab tabName="tab">
            <Form.Input name={"field"} />
            <div>
              <Form.Tab tabName="tab1">
                <Form.Input name={"field1"} />
                <br></br>
                <Form.Input name={"field2"} />
                <Form.Input name={"field3"} />
                <Form.Input name={"field4"} />
                <Form.Input name={"field5"} />
                <Form.Tab tabName="tab11">
                  <Form.Input name={"field6"} />
                  <Form.Input name={"field7"} />
                  <Form.Input name={"field8"} />
                </Form.Tab>
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
