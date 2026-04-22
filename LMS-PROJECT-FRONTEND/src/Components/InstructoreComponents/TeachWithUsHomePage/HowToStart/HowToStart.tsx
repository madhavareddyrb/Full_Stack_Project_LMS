import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Layout, Pointer, Zap } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  // badge: string;
  description: string;
  action_description: string;
  helptitle: string;
  helpdescription: string;
  // buttonText?: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const HowToStart = ({
  badge = "",
  heading = "How To Start Your Journey With Us",
  description = "",
  tabs = [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Plan Your Curriculum",
      content: {
        // badge: "Modern Tactics",
        description:
          "You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool.",
        action_description:
          "The way that you teach — what you bring to it — is up to you.",
        helptitle: "How we help you",
        helpdescription:
          "We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized.",
        // buttonText: "",
        imageSrc:
          "https://s.udemycdn.com/teaching/plan-your-curriculum-2x-v3.jpg",
        imageAlt: "placeholder",
      },
    },
    {
      value: "tab-2",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "Record Your Video",
      content: {
        // badge: "Modern Tactics",
        description:
          "Use basic tools like a smartphone or a DSLR camera. Add a good microphone and you’re ready to start.",
        action_description:
          "If you don’t like being on camera, just capture your screen. Either way, we recommend two hours or more of video for a paid course.",
        helptitle: "How we help you",
        helpdescription:
          "Our support team is available to help you throughout the process and provide feedback on test videos.",
        // buttonText: "",
        imageSrc: "https://s.udemycdn.com/teaching/record-your-video-2x-v3.jpg",
        imageAlt: "placeholder",
      },
    },
    {
      value: "tab-3",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: "Launch Your Course",
      content: {
        // badge: "Modern Tactics",
        description:
          "Gather your first ratings and reviews by promoting your course through social media and your professional networks.",
        action_description:
          "Your course will be discoverable in our marketplace where you earn revenue from each paid enrollment.",
        helptitle: "How we help you",
        helpdescription:
          "Our custom coupon tool lets you offer enrollment incentives while our global promotions drive traffic to courses. There’s even more opportunity for courses chosen for Udemy Business.",
        // buttonText: "",
        imageSrc:
          "https://s.udemycdn.com/teaching/launch-your-course-2x-v3.jpg",
        imageAlt: "placeholder",
      },
    },
  ],
}: Feature108Props) => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline">{badge}</Badge>
          <h1 className="max-w-2xl text-2xl font-semibold md:text-4xl">
            {heading}
          </h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-3 lg:p-10">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  {/* <Badge variant="outline" className="w-fit bg-background">
                    {tab.content.badge}
                  </Badge> */}
                  <p className="text-muted-foreground lg:text-lg">
                    {tab.content.description}
                  </p>
                  <p className="text-muted-foreground lg:text-lg">
                    {tab.content.action_description}
                  </p>
                  <h3 className="text-1xl font-semibold lg:text-2xl">
                    {tab.content.helptitle}
                  </h3>
                  <p className="text-muted-foreground lg:text-lg">
                    {tab.content.helpdescription}
                  </p>
                  {/* <Button className="mt-2.5 w-fit gap-2" size="lg">
                    {tab.content.buttonText}
                  </Button> */}
                </div>
                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-xl"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default HowToStart;
