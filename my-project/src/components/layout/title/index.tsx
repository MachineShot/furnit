import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link href="/">
        {collapsed ? (
          <img src="/furnit-collapsed.png" alt="Furnit" width="28px" />
        ) : (
          <img src="/furnit.png" alt="Furnit" width="140px" />
        )}
      </Link>
    </Button>
  );
};
