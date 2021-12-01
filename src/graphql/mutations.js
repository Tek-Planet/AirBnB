/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      image
      type
      title
      description
      createdAt
      bed
      bedroom
      maxGuests
      oldPrice
      newPrice
      latitude
      longitude
      updatedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      image
      type
      title
      description
      createdAt
      bed
      bedroom
      maxGuests
      oldPrice
      newPrice
      latitude
      longitude
      updatedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      image
      type
      title
      description
      createdAt
      bed
      bedroom
      maxGuests
      oldPrice
      newPrice
      latitude
      longitude
      updatedAt
    }
  }
`;
