import { Card, CardBody } from "@nextui-org/react";

export default function RulesTab() {
  return (
    <Card>
      <CardBody>
        <h2 className="text-xl font-semibold">Competition Rules</h2>
        <div className="mt-4 space-y-6">
          <section>
            <h3 className="text-lg font-semibold">General Guidelines</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>All submissions must be made through the official platform</li>
              <li>Teams are limited to a maximum of 4 members</li>
              <li>Solutions must be your own original work</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold">Submission Rules</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Submissions must be in the specified format</li>
              <li>Each team is limited to 5 submissions per day</li>
              <li>Final submissions must be made before the deadline</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold">Evaluation Criteria</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Accuracy of solutions</li>
              <li>Efficiency of implementation</li>
              <li>Code quality and documentation</li>
            </ul>
          </section>
        </div>
      </CardBody>
    </Card>
  );
}