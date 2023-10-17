import { Button } from "@nextui-org/button";
import styles from "./WelcomeScreen.module.scss";
import React from "react";

type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
    <section className={styles.backgroundImage}>
      <div className="flex flex-col items-start justify-center h-full">
        <div className="text-6xl w-1/2 font-semibold mb-10">
          Find the perfect event for you
        </div>

        <div className="info-text w-1/2 leading-loose mb-10">
          Zdybanka is your go-to platform for organizing small events. Whether
          you're looking for someone to join you on a hike, a movie night, or a
          dinner date, we've got you covered. Browse our events or create your
          own and meet new people today!
        </div>

        <div className="flex gap-2">
          <Button color="primary">Browse</Button>
          <Button color="secondary">Create</Button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeScreen;
