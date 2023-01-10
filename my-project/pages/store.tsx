import { API_URL } from "lib/constants";
import { GetServerSideProps } from "next";
import { IItem } from "src/interfaces";
import dataProvider from "@pankod/refine-simple-rest";
import { GetListResponse, useTable, LayoutWrapper } from "@pankod/refine-core";
import { ItemCard } from "@components/store";
import { Grid } from "@pankod/refine-mui";

type ItemProps = {
    items: GetListResponse<IItem>;
};

export const ProductList: React.FC<ItemProps> = ({ items }) => {
    const { tableQueryResult } = useTable<IItem>({
        resource: "items",
        queryOptions: {
            initialData: items,
        },
        metaData: { populate: ["pictureUrl"] },
    });

    return (
        <LayoutWrapper>
            <Grid columns={[1, 2, 3]} mt={"6px"}>
                {tableQueryResult.data?.data.map((item) => (
                    <ItemCard
                        id={item.id}
                        title={item.name}
                        description={item.description}
                        price={item.price}
                        cardImage={
                            item.pictureUrl
                                ? item.pictureUrl
                                : "./error.png"
                        }
                    />
                ))}
            </Grid>
        </LayoutWrapper>
    );
};

export default ProductList;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const data = await dataProvider(API_URL).getList<IItem>({
        resource: "items",
        metaData: { populate: ["pictureUrl"] },
    });

    return {
        props: { products: data },
    };
};