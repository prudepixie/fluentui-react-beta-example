import {
  Avatar,
  Badge,
  Button,
  CompoundButton,
  CounterBadge,
  Divider,
  Image,
  Link,
  MenuButton,
  PresenceBadge,
  SplitButton,
  Text,
  ToggleButton,
} from "@fluentui/react-components";
import { Accordion, AccordionItem } from "@fluentui/react-accordion";
import { Checkbox } from "@fluentui/react-checkbox";
import {
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
} from "@fluentui/react-card";
import { Label } from "@fluentui/react-label";
import { Radio, RadioGroup } from "@fluentui/react-radio";
// import { Tab, TabPanel, Tabs } from "@fluentui/react-tabs";
// import ReplySVG from "./assets/reply.svg";
// import ShareSVG from "./assets/share.svg";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  //   accordion: (
  //     <Accordion>
  //       <AccordionItem value="">
  //         <span slot="heading">Panel One</span>
  //         Panel one content
  //       </AccordionItem>
  //       <AccordionItem>
  //         <span slot="heading">Panel two</span>
  //         Panel two content
  //       </AccordionItem>
  //       <AccordionItem>
  //         <span slot="heading">Panel three</span>
  //         Panel three content
  //       </AccordionItem>
  //     </Accordion>
  //   ),
  avatar: <Avatar name="Jane Doe"></Avatar>,
  badge: <Badge>Badge</Badge>,
  button: <Button appearance="primary">Button</Button>,
  card: (
    <Card>
      <CardHeader>
        <img
          slot="image"
          src="https://raw.githubusercontent.com/microsoft/ui/master/packages/react-card/assets/avatar_mauricio.svg"
          alt="Placeholder user photo"
        />
        <span>
          <b>Chris</b> + 7 others edited
        </span>
        <p slot="description"> v9 + Web Components</p>
        <Button slot="action" appearance="transparent">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M10 6a1.25 1.25 0 110-2.5A1.25 1.25 0 0110 6zm0 5.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm-1.25 4a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0z"></path>
          </svg>
        </Button>
      </CardHeader>
      <CardPreview>
        <img
          src="https://raw.githubusercontent.com/microsoft/ui/master/packages/react-card/assets/doc_template.png"
          alt="Preview of a Word document "
        />
        <img
          slot="logo"
          src="https://raw.githubusercontent.com/microsoft/ui/master/packages/react-card/assets/word_logo.svg"
          alt="Microsoft Word logo"
        />
      </CardPreview>
      <CardFooter>
        <Button>
          {/* <ReplySVG /> */}
          Reply
        </Button>
        <Button>
          {/* <ShareSVG /> */}
          Share
        </Button>
      </CardFooter>
    </Card>
  ),
  checkbox: (
    <div>
      <Checkbox label="My checkbox"></Checkbox>
      <Checkbox disabled label="My checkbox"></Checkbox>
      <Checkbox checked label="My checkbox"></Checkbox>
    </div>
  ),
  counterBadge: <CounterBadge count={5}></CounterBadge>,
  compoundButton: (
    <CompoundButton appearance="primary">
      Button <span slot="description">Secondary content</span>
    </CompoundButton>
  ),
  divider: <Divider></Divider>,
  //   image: (
  //     <Image>
  //       <img alt="Image placeholder" src="https://via.placeholder.com/300x300" />
  //     </Image>
  //   ),
  menuButton: <MenuButton>Button</MenuButton>,
  label: <Label>label</Label>,
  link: <Link href="#">this is a link</Link>,
  presenceBadge: (
    <div className="container">
      <PresenceBadge status="available"></PresenceBadge>
      <PresenceBadge status="away"></PresenceBadge>
      <PresenceBadge status="busy"></PresenceBadge>
      <PresenceBadge status="doNotDisturb"></PresenceBadge>
      <PresenceBadge status="offline"></PresenceBadge>
      <PresenceBadge status="outOfOffice"></PresenceBadge>
      <PresenceBadge></PresenceBadge>
    </div>
  ),
  radioGroup: (
    <RadioGroup name="numbers">
      <Radio value="one"></Radio>
      <Radio value="two"></Radio>
      <Radio value="three"></Radio>
      <Radio value="four"></Radio>
    </RadioGroup>
  ),
  radio: <Radio value="label"></Radio>,
  splitButton: (
    <SplitButton>
      <Button>Button</Button>
      <MenuButton aria-label="Menu Button"></MenuButton>
    </SplitButton>
  ),
  //   tabs: (
  //     <Tabs id="myTab" activeId="TabTwo">
  //       <Tab value="TabOne" id="TabOne">First tab</Tab>
  //       <Tab value="TabTwo" id="TabTwo">Second tab</Tab>
  //       <Tab value="TabTwo" id="TabThree">Third tab</Tab>
  //       <TabPanel id="TabPanelOne">
  //         First tab content. This is for testing.
  //       </TabPanel>
  //       <TabPanel id="TabPanelTwo">
  //         Second tab content. This is for testing.
  //       </TabPanel>
  //       <TabPanel id="TabPanelThree">
  //         Third tab content. This is for testing.
  //       </TabPanel>
  //     </Tabs>
  //   ),
  text: (
    <Text>
      <span>Default text styles</span>
    </Text>
  ),
  toggleButton: <ToggleButton>Button</ToggleButton>,
};
