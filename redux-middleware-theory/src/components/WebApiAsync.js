const WebApiAsync = ({ loadingPost, loadingUsers, post, users }) => {
  return (
    <div>
      <section>
        <h1>Post</h1>
        {loadingPost && 'Loading Post...'}
        {!loadingPost && post && (
          <div>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
        )}
      </section>

      <hr />

      <section>
        <h1>Users</h1>
        {loadingUsers && 'Loadgin Users...'}
        {!loadingUsers && users && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.nsername}
                {user.email}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default WebApiAsync;
