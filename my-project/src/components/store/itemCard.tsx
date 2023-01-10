import { Box, Badge, Button } from "@pankod/refine-mui";
import EuroIcon from '@mui/icons-material/Euro';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export type ItemProps = {
    id: number;
    title: string;
    description: string;
    price: number;
    cardImage: string;
};

export const ItemCard: React.FC<ItemProps> = ({
    id,
    title,
    description,
    price,
    cardImage,
}) => {
    return (
        <Box 
        sx={{
            maxHeight: "sm",
            borderWidth: "1px",
            borderRadius: "1g",
            overflow: "hidden"
        }}>
            <img height={"300px"} src={cardImage}/>
            <Box 
            sx={{
                p: "6px"
            }}>
                <Box 
                sx={{
                    display: "flex",
                    allignItems: "baseline",
                    mb: "10px",
                    ml: "-2px"
                }}>
                    <Badge color="primary" badgeContent={"New!"}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}>
                        <AnnouncementIcon/>
                    </Badge>
                </Box>

                <Box
                sx={{
                    mt: "2px",
                    fontWeight: "semibold",
                    as: "h4",
                    lineHeight: "tight",
                    noOfLines: "1"
                }}
                >
                    {title}
                </Box>
                <Box
                sx={{
                    mt: "2px",
                    fontWeight: "semibold",
                    as: "h4",
                    lineHeight: "tight"
                }}
                >
                    <Badge>
                        {price}
                        <EuroIcon/>
                    </Badge>
                </Box>
                <Box
                sx={{
                    mt: "2px",
                    fontWeight: "semibold",
                    as: "h4",
                    lineHeight: "tight",
                    noOfLines: "2"
                }}
                >
                    {description}
                </Box>

                <Box color={"white"}>{}</Box>
                <Box
                    fontSize="sm"
                    display={"flex"}
                    mt="4px"
                    justifyContent={"flex-end"}
                >
                    <Button 
                        className="buy-button snipcart-add-item" 
                        data-item-id={id}
                        data-item-price={price}
                        data-item-url="/"
                        data-item-name={title}
                        data-item-description={description}
                        data-item-image={cardImage}
                    >
                        Add to Basket
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};