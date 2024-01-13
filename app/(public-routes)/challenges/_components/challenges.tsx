import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import React from "react";

export default function Challenges() {
  return (
    <>
      <section className="p-4 space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground">
            Scale up your development with the following challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 container">
          <Card className="p-4 hover:bg-stone-50 transition cursor-pointer">
            <CardTitle className="mb-2 text-xl">Card title</CardTitle>

            <CardDescription className="leading-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum exercitationem voluptatem architecto a deleniti alias
              voluptates esse nulla dolore hic.
            </CardDescription>
          </Card>

          <Card className="p-4 hover:bg-stone-50 transition cursor-pointer">
            <CardTitle className="mb-2 text-xl">Card title</CardTitle>

            <CardDescription className="leading-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum exercitationem voluptatem architecto a deleniti alias
              voluptates esse nulla dolore hic.
            </CardDescription>
          </Card>

          <Card className="p-4 hover:bg-stone-50 transition cursor-pointer">
            <CardTitle className="mb-2 text-xl">Card title</CardTitle>

            <CardDescription className="leading-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum exercitationem voluptatem architecto a deleniti alias
              voluptates esse nulla dolore hic.
            </CardDescription>
          </Card>
        </div>
      </section>
    </>
  );
}
