defmodule ReactphxWeb.PageController do
  use ReactphxWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
