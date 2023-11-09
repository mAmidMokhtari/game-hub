import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack>
      <Skeleton boxSize="32px" borderRadius={8} />
      <SkeletonText noOfLines={1} width="80px" />
    </HStack>
  );
};

export default GenreListSkeleton;
