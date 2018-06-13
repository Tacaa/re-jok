// @flow
import * as React from 'react';

import List from '../List';
import Avatar from '../../Avatar/Avatar';
import Button from '../../Button/Button'

class ListDemo extends React.Component<{}> {

  render(){
    return (
      <React.Fragment>
        <List divided>
          <List.Item>
            <List.Content
              primaryHeader="Tung Tran Ba Thanh"
              description={
                <List>
                  <List.Item>
                    <List.Content
                      primaryHeader="Tung Tran Ba Thanh"
                      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."

                      secondaryHeader="Lorem Ipsum"
                      media={
                        <Avatar imgSrc = "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" />
                      }
                    />
                  </List.Item>

                  <List.Item>
                    <List.Content
                      primaryHeader="Tung Tran Ba Thanh"
                      description={
                        <List>
                          <List.Item>
                            <List.Content
                              primaryHeader="Tung Tran Ba Thanh"
                              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."

                              secondaryHeader="Lorem Ipsum"
                              media={
                                <Avatar imgSrc = "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" />
                              }
                            />
                          </List.Item>

                          <List.Item>
                            <List.Content
                              primaryHeader="Tung Tran Ba Thanh"
                              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."

                              secondaryHeader="Lorem Ipsum"
                              media={
                                <Avatar imgSrc = "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" />
                              }
                            />
                          </List.Item>

                          <List.Item>
                            <List.Content
                              primaryHeader="Tung Tran Ba Thanh"
                              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."

                              secondaryHeader="Lorem Ipsum"
                              media={
                                <Avatar imgSrc = "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" />
                              }
                            />
                          </List.Item>
                        </List>
                      }

                      secondaryHeader="Lorem Ipsum"
                      media={
                        <Avatar imgSrc = "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" />
                      }
                    />
                  </List.Item>

                  <List.Item>
                    <List.Content
                      primaryHeader="Tung Tran Ba Thanh"
                      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."

                      secondaryHeader="Lorem Ipsum"
                      media={
                        <Avatar imgSrc = "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" />
                      }
                    />
                  </List.Item>
                </List>
              }

              secondaryHeader="Lorem Ipsum"
              action={<Button hasBoxShadow variant="outline">Add</Button>}
              media={
                <Avatar imgSrc = "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" />
              }
            />
          </List.Item>

          <List.Item>
            <List.Content
              primaryHeader="Tung Tran Ba Thanh"
              secondaryHeader="Lorem Ipsum"
              action={<Button hasBoxShadow variant="outline">Add</Button>}
              media={
                <Avatar imgSrc = "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" />
              }
            ></List.Content>
          </List.Item>

          <List.Item>
            <List.Content
              primaryHeader="Tung Tran Ba Thanh"

              secondaryHeader="Lorem Ipsum"
              action={<Button hasBoxShadow variant="outline">Add</Button>}
              media={
                <Avatar imgSrc = "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" />
              }
            />
          </List.Item>
        </List>

        <List horizontal>
          <List.Item hrefString="https://github.com/tranbathanhtung">Home</List.Item>
          <List.Item>Button</List.Item>
          <List.Item>Card</List.Item>
          <List.Item>Avatar</List.Item>
          <List.Item>Grid</List.Item>
          <List.Item>List</List.Item>
          <List.Item>Icon</List.Item>

        </List>
      </React.Fragment>

    )
  }
}

export default ListDemo
