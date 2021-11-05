// serialize and deserialize memo for storing in localStorage

export const makeMemoObj = (uid, title, content) => {
    return {
        uid,
        title,
        content,
        createdAt: new Date(),
    };
}