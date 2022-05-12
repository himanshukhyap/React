import React, { Component } from "react";
import "./WishListPopup.css";

import { Scrollbars } from "react-custom-scrollbars";
import CartPopupComponent from "../../Components/Carts/Popup/CartPopupComponent";
import WhislistComponent from "../../Components/Carts/Popup/WhislistComponent";

export default function WishListPopup() {
  return (
    <>
      <Scrollbars
        className="ScrollbarsPopup"
        onScroll={this.handleScroll}
        onScrollFrame={this.handleScrollFrame}
        onScrollStart={this.handleScrollStart}
        onScrollStop={this.handleScrollStop}
        onUpdate={this.handleUpdate}
        renderView={this.renderView}
        renderTrackHorizontal={this.renderTrackHorizontal}
        renderTrackVertical={this.renderTrackVertical}
        renderThumbHorizontal={this.renderThumbHorizontal}
        renderThumbVertical={this.renderThumbVertical}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMin={0}
        autoHeightMax={300}
        thumbMinSize={30}
        universal={true}
        style={{ width: "330px", height: "800px" }}
      >
        <ul class="list-group list-group-flush">
          <li class="list-group-item p-4">
            <WhislistComponent />
          </li>
          <li class="list-group-item p-4">
            <WhislistComponent />
          </li>
          <li class="list-group-item p-4">
            <WhislistComponent />
          </li>
          <li class="list-group-item p-4 ">
            <WhislistComponent />
          </li>
          {/* <li class="list-group-item p-4 shadow"></li> */}
        </ul>
      </Scrollbars>
      <div class="list-group-item p-4 shadow" style={{ width: "330px" }}>
        {" "}
        <div>
          <span class="h4 fw-bold">Total:</span>
          <span class="h4 fw-bold ps-2">₹2,940</span>
          <span class="h5 text-muted ps-2">
            <del>₹44,480</del>
          </span>
        </div>
        <button className="py-2 bg-dark text-white fw-bold border-0 w-100 m-auto d-flex justify-content-center mt-3">
          Go to WhishList
        </button>
      </div>
    </>
  );
}
