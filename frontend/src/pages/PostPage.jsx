// import {
//   Avatar,
//   Box,
//   Button,
//   Divider,
//   Flex,
//   Image,
//   Text,
// } from "@chakra-ui/react";
// import { BsThreeDots } from "react-icons/bs";
// import Actions from "../components/Actions";
// import { useState } from "react";
// import Comment from "../components/Comment";
// const PostPage = () => {
//   const [liked, setLiked] = useState(false);
//   return (
//     <>
//       <Flex>
//         <Flex w={"full"} alignItems={"center"} gap={3}>
//           <Avatar src="/zuck-avatar.png" size={"md"} name="Mark Zuckerberg" />
//           <Flex>
//             <Text fontSize={"sm"} fontWeight={"bold"}>
//               markzuckerberg
//             </Text>
//             <Image src="/verified.png" w="4" h={4} ml={4} />
//           </Flex>
//         </Flex>
//         <Flex gap={4} alignItems={"center"}>
//           <Text fontSize={"sm"} color={"gray.light"}>
//             1d
//           </Text>
//           <BsThreeDots />
//         </Flex>
//       </Flex>
//       <Text my={3}>Let&apos;s talk about Threads.</Text>
//       <Box
//         borderRadius={6}
//         overflow={"hidden"}
//         border={"1px solid"}
//         borderColor={"gray.light"}
//       >
//         <Image src={"/post1.png"} w={"full"} />
//       </Box>
//       <Flex gap={3} my={3}>
//         <Actions liked={liked} setLiked={setLiked} />
//       </Flex>
//       <Flex gap={2} alignItems={"center"}>
//         <Text color={"gray.light"} fontSize={"sm"}>
//           238 replies
//         </Text>
//         <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
//         <Text color={"gray.light"} fontSize={"sm"}>
//           {200 + (liked ? 1 : 0)} likes
//         </Text>
//       </Flex>
//       <Divider my={4} />
//       <Flex justifyContent={"space-between"}>
//         <Flex gap={2} alignItems={"center"}>
//           <Text fontSize={"2xl"}>👋</Text>
//           <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
//         </Flex>
//         <Button>Get</Button>
//       </Flex>
//       <Divider my={4} />
//       <Comment
//         comment="Looks really good!"
//         createdAt="2d"
//         likes={100}
//         username="johndoe"
//         userAvatar="https://bit.ly/dan-abramov"
//       />
//       <Comment
//         comment="Amazing!"
//         createdAt="1d"
//         likes={21}
//         username="janedoe"
//         userAvatar="https://bit.ly/code-beast"
//       />
//       <Comment
//         comment="Looks good!"
//         createdAt="2d"
//         likes={42}
//         username="sallydoe"
//         userAvatar="https://bit.ly/sage-adebayo"
//       />
//     </>
//   );
// };
// export default PostPage;

import { useState } from "react";
import { Flex, Text, Box, Avatar, Image, Button } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import Comment from "../components/Comment.jsx";
const PostPage = ({ likes, replies }) => {
  const [liked, setLiked] = useState(false); // Local state for liked/unliked
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/post1.png";
    link.download = "downloaded-image.jpg"; // The default name for the image when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const copyToClipboard = () => {
    const postLink = `${window.location.origin}/post/123`; // Generate the full post link

    // Copy the post link to the clipboard
    navigator.clipboard
      .writeText(postLink)
      .then(() => {
        alert("Post link copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy link: ", error);
      });
  };

  return (
    <>
      <Flex gap={3} mb={4} py={5}>
        {/* Left section with Avatar and smaller Avatars */}
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Avatar size="md" name="M Anas" src="/pic2.jpg" />
        </Flex>

        {/* Right section with post details */}
        <Flex flex={1} flexDirection={"column"} gap={2}>
          <Flex justifyContent={"space-between"} w={"full"}>
            <Flex w={"full"} alignItems={"center"}>
              <Text fontSize={"sm"} fontWeight={"bold"}>
                M Anas
              </Text>
              <Image src="/verified.png" w={4} h={4} ml={1} alt="Verified" />
            </Flex>

            {/* Menu with options */}
            <Flex gap={4} alignItems={"center"}>
              <Text fontSize={"sm"} color={"gray.500"}>
                1d
              </Text>
              <Menu>
                <MenuButton>
                  <BsThreeDots />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={copyToClipboard}>Copy Post Link</MenuItem>
                  <MenuItem onClick={handleDownload}>download image</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>

          {/* Post title */}
          <Text fontSize={"sm"}>This is markzuckerberg image</Text>

          {/* Post image */}
          <Box
            borderRadius={6}
            overflow={"hidden"}
            border={"1px solid"}
            borderColor={"gray.light"}
            w={"full"}
          >
            <Image src="/post1.png" alt="Post image" w={"full"} />
          </Box>

          {/* Actions section */}
          <Flex gap={3} my={1}>
            <Actions
              liked={liked}
              setLiked={setLiked}
              likes={likes}
              replies={replies}
            />{" "}
            {/* Pass props to Actions */}
          </Flex>
        </Flex>
      </Flex>
      <Divider my={4} />
      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>👋</Text>
          <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>

      <Divider my={4} />
      <Comment
        likes={23}
        replies={12}
        comments="looks really good!"
        username="michale"
        createdAt="2d"
        userAvatar="https://bit.ly/code-beast"
      />
      <Comment
        likes={22}
        replies={4}
        comments="awesome!"
        username="kentdods"
        createdAt="1d"
        userAvatar="https://bit.ly/kent-c-dodds"
      />
      <Comment
        likes={9}
        replies={0}
        comments="nice!"
        username="ryan folrence"
        createdAt="justnow"
        userAvatar="https://bit.ly/ryan-florence"
      />
    </>
  );
};

export default PostPage;
