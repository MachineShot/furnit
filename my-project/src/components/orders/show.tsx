import { useOne, useShow } from "@pankod/refine-core";
import { Show, Stack, Typography, TagField } from "@pankod/refine-mui";

import { IItem, IOrderItems, IOrder } from "src/interfaces";

export const OrderShow: React.FC = () => {
    const { queryResult } = useShow<IOrder>();

    const { data, isLoading } = queryResult;
    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Stack gap={1}>
                <Typography variant="body1" fontWeight="bold">
                    ID
                </Typography>
                <Typography variant="body2">{record?.id}</Typography>
                <Typography variant="body1" fontWeight="bold">
                    Status
                </Typography>
                <Typography variant="body2">
                    <TagField value={record?.status} />
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                    No. of Items
                </Typography>
                <Typography variant="body2">
                    <TagField value={record?.numberOfItems} />
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                    Total Price
                </Typography>
                <Typography variant="body2">
                    <TagField value={record?.totalOrderPrice} />
                </Typography>
            </Stack>
        </Show>
    );
};